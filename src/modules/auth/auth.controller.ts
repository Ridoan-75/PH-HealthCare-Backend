import { AuthService } from "./auth.service";
import { catchAsync } from "../../shared/catchAsync";
import { Request, Response } from "express";
import { sendResponse } from "../../shared/sendResponse";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await AuthService.registerPatient(payload);

  sendResponse(res, {
    httpStatusCode: 201,
    data: result,
    message: "Patient registered successfully",
    success: true,
  });
});


const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await AuthService.loginUser(payload);

  sendResponse(res, {
    httpStatusCode: 200,
    data: result,
    message: "User logged in successfully",
    success: true,
  });
});


export const AuthController = {
  registerPatient,
  loginUser,
};
