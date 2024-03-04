describe('Test with setup and teardown'),function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    })
}
    it("should add up for the total payment",function(){
        
        billAmtInput.value = 100
        tipAmtInput.value = 20
        submitPaymentInfo()

        expect(sumPaymentTotal('billAmt')).toEqual(120)
    })
    it("should calculate the tip percent",function(){
        expect(calculateTipPercent(100,23)).toEqual(23);
        expect(calculateTipPercent(300,60)).toEqual(20);
    })
    it("should add the values to the table",function(){
        let newTr = document.createElement('tr');
        appendTd(newTr,"test");

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHtml).toEqual("test");
        
    })