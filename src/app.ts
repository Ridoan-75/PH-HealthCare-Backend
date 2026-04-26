import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { indexRoute } from './routes';
import { prisma } from './lib/prisma';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

// parsers
app.use(express.json());
app.use(cors());

// application routes


//basic route
app.get('/', async (req: Request, res: Response) => {
   const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology"
    }
   })

   res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: specialty
   })
})


// routes
app.use("/api/v1/", indexRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Apollo Gears World!');
});

export default app;
