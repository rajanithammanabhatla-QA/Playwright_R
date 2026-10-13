interface WorkerDetails {
    workerName: string;
    workerAge: number;
    workerSalary: number;
}

class WorkerRecord implements WorkerDetails {

    workerName: string = "Rajani";
    workerAge: number = 25;

    // workerSalary is missing
}