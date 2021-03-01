import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {

    //http://localhost:3333/answers/2?u=c20f716f-286e-4471-87e3-e49ec8365aca

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u)
        })

        if (!surveyUser) {
            throw new AppError("Survey Users does not exits!");
        }

        surveyUser.value = Number(value);

        await surveyUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController };