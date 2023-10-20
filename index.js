            //   CALCULATOR .. 
            function calculator(num1,num2,operator){
                var num1 = parseFloat(prompt("ENTER YOUR NUMBER"));
                var operator = prompt("ENTER OPERATOR + - * /");
                var num2 = parseFloat(prompt("ENTER YOUR NUMBER"));
               
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                        case '-':
                            result = num1 - num2;
                            break;
                            case '*':
                                result = num1 * num2 ;
                                break;
                                case '/':
                                    if(num2 !== 0 ){
                                        result = num1 / num2;
                                        break;
                                    } else{ "zero is not devide by any number"};
                                    default:
                                        return 'not a number'
                }
                return result;
             }
             var calculatorResult = alert( calculator());
 

  









