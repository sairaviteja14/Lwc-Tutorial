public with sharing class Apexhandler {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountRecords(){
        return [select Id, Name, Phone,Type,Rating,Industry from Account limit 10];
    }
    
}