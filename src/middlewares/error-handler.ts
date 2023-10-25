import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (err: Error, req: Request, res: Response) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  } else {
    res.status(400).send({
      errors: [
        {
          message: `Something went wrong: ${
            process.env.NODE_ENV === "development" ? err : ""
          }`,
        },
      ],
    });
  }
  res.status(400).send({ errors: [{ message: "Something went wrong" }] });
};
