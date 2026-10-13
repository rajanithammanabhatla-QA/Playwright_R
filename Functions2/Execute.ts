function Execute(task: string, callback: (task: string) => void): void;
function Execute (task: number, callback: (task: number) => void): void;

function Execute (task: any, callback: any): void 
{callback(task);
}
Execute ("read", (t) => console.log("Task:", t.toUpperCase()));
Execute (10, (t) => console.log("Task number squared:", t * t));
