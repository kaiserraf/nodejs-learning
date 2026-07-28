const crypto = require('crypto');
const secret = '12345678901234567890123456789012'; // manter num .env

const encrypt = value => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv);
    let encypted = cipher.update(value);
    encypted = Buffer.concat([encypted, cipher.final()]);

    return `${iv.toString('hex')}:${encypted.toString('hex')}`;
}

const resultEncrypted = encrypt('amoMinhaNamorada');

console.log(resultEncrypted);

const decrypt = value => {
    const [iv, encrypted] = value.split(':');
    const ivBuffer = Buffer.from(iv, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secret), ivBuffer);
    let content = decipher.update(Buffer.from(encrypted, 'hex'));
    content = Buffer.concat([content, decipher.final()]);

    return content.toString();
}

const resultDecrypt = decrypt(resultEncrypted);
console.log(resultDecrypt);
