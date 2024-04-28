
export class DailyRegisterModel {
    constructor(
        public updated_date: string,
        public reciept_no: number,
        public student_name: string,
        public standard: string,
        public admission_fee: number,
        public tuition_fee: number,
        public term_fee: number,
        public stationary_fee: number,
        public computer_fee: number,
        public total_fee: number
    ) { }
}
    