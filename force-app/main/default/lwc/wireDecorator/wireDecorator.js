import { LightningElement,wire,track} from 'lwc';
import getAccountRecords from '@salesforce/apex/Apexhandler.getAccountRecords';
const COLUMNS=[
    {label:'Name',fieldName:'Name'},
    {label:'Rating',fieldName:'Rating'},
    {label:'Phone',fieldName:'Phone'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Type',fieldName:'Type'}
]
export default class WireDecorator extends LightningElement {
    @track columns=COLUMNS;
    @track accounts;
    @wire(getAccountRecords)
    accounts({data,error}){
        if(data){
            this.accounts=data;
        }
    }
}