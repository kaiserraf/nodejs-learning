import pool from './config/database';

interface Usuario{
    id: number,
    nome: string,
    email: string
}

// buscar todos os usuários
// pool.query() pega uma conexão do pool, executa e devolve a conexão
export async function buscarUsuarios(): Promise<Usuario[]> {
    const resultado = await pool.query<Usuario>(
        `SELECT id, nome, email FROM usuarios ORDER BY id`
    );
    return resultado.rows; // rows contem o array de resultados
}

// buscar por ID com parâmetro ($1 evita SQL injection)
export async function buscarUsuarioPorId(id:number): Promise<Usuario | null> {
    const resultado = await pool.query<Usuario>(
        `SELECT id, nome, email FROM usuarios WHERE id = $1`, [id]
        // valor de id passado separadamente - nunca concatenar na string!
    );
    return resultado.rows[0] ?? null; // se não houver valor retorna null ou rows[0]
}

// inserir novo usuario
export async function criarUsuario(nome:string, email:string):Promise<Usuario> {
    const resultado = await pool.query<Usuario>(
        `INSERT INTO usuarios (nome, email)
        VALUES ($1, $2)
        RETURNING id, nome, email`, // RETURNING devolve o registro criado
        [nome, email]
    );
    const usuario =  resultado.rows[0];
    if(!usuario) throw new Error('Falha ao criar usuario');
    return usuario;
}

// atualiza usuario pelo ID - somente o que for enviado
export async function atualizarUsuario(id:number,
    dados: Partial<{nome:string; email:string}> // Partial = todos os campos opcionais
): Promise<Usuario | null> {
    const campos: string[] = [];
    const valores: unknown[] = [];
    let contador = 1;

    // monta dinamicamente só os campos que foram enviados
    if(dados.nome !== undefined){
        campos.push(`nome = $${contador++}`);
        valores.push(dados.nome);
    }
    if(dados.email !== undefined){
        campos.push(`email = $${contador++}`);
        valores.push(dados.email);
    }

    if(campos.length === 0) return null; // nada para atualizar
    
    valores.push(id);
    
    const resultado = await pool.query<Usuario>(
      `UPDATE usuarios SET ${campos.join(',')} WHERE id = $${contador} RETURNING id, nome, email`,
      valores
    
    );
    return resultado.rows[0] ?? null;
}

// deletar um usuario pelo ID

export async function deletarUsuario(id:number): Promise<Usuario | null> {
    const resultado = await pool.query<Usuario>(
        `DELETE FROM usuarios
        WHERE id = $1
        RETURNING id, nome, email`, // devolve o registro antes de deletar
        [id]
    );

    return resultado.rows[0] ?? null;
}