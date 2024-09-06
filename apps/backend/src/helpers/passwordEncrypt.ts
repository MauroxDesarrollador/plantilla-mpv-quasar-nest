import * as bcrypt from 'bcrypt';

const saltRounds = 10;

/**
 * Encripta una contraseña usando bcrypt.
 * @param password - La contraseña a encriptar.
 * @returns Promesa que resuelve a la contraseña encriptada.
 */
export const parserPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};