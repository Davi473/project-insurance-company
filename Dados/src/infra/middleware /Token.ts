import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const chaveSecreta = "1234"; 

export function autenticarJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ mensagem: "Acesso negado. Nenhum token fornecido." });
  }

  try {
    const decoded = jwt.verify(token, chaveSecreta); 
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(403).json({ mensagem: "Token inválido ou expirado." });
  }
}
