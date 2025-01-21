import { LightningElement,wire,track } from 'lwc';
import getAccountRecords from '@salesforce/apex/Apexhandler.getAccountRecords';

const COLUMNS=[
    {label:'Name',fieldName:'Name'},
    {label:'Rating',fieldName:'Rating'},
    {label:'Phone',fieldName:'Phone'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Type',fieldName:'Type'}
]
export default class WireDecoratorwithratingfill extends LightningElement {
    @track columns=COLUMNS;
        @track accounts;
        @wire(getAccountRecords)
        accounts({data,error}){
            if(data){
                let updateobject={};
                let updateaccounts=data.map(account=>{
                    if(!account.hasOwnProperty('Rating')){
                        updateobject={...account,Rating:'Not Available'};
                    }else{
                        updateobject={...account};
                    }
                    return updateobject;
                });
                this.accounts = updateaccounts;
            } else if (error) {
                console.log('Error Occured');
            }
        }
}