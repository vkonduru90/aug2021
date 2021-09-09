export interface Student {
    nam : String,
    lname?: string,
    rolnum : Number,
    course?: string

}

export class Student {
    lname?: string = "";
    nam: String = "";
    rolnum: Number = 0;
    course?: string = "";
}
