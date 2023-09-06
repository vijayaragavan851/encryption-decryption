import { alp_code } from "./decoding.js";

export const enc_code = {'AQ': 0, 'AW':1, 'AE':2, 'AR':3, 'AT':4,'AY':5,'AU':6, 'AI':7, 'AO':8, 'AP':9,'AA':10,
            'AS':11, 'AD':12, 'AF':13, 'AG':14,'AH':15,'AJ':16, 'AK':17, 'AL':18, 'AZ':19,'AX':20,
            'AC':21, 'AV':22, 'AB':23, 'AN':24,'AM':25,'BA':26, 'BN':27, 'BH':28, 'BK':29,'BL':30,
            'BC':31, 'BT':32, 'BD':33, 'BX':34,'BZ':35,'BV':36, 'BS':37, 'BJ':38, 'BP':39,'RR':40,
            'BQ':41, 'BI':42, 'BR':43, 'CA':44,'CZ':45,'CT':46, 'CY':47, 'CU':48, 'CI':49,'CP':50,
            'CO':51, 'CH':52, 'CK':53, 'CV':54,'CB':55,'CM':56, 'CN':57, 'CQ':58, 'CG':59,'CE':60,
            'CF':61, 'CR':62, 'DQ':63, 'DG':64,'DT':65,'DZ':66, 'DJ':67, 'DU':68, 'DO':69,'DP':70,'DM':71, 'DN':72, 'DS':73, 'DL':74,'DV':75,'EA':76, 'ER':77, 'ET':78, 'EU':79,'EO':80,'EP':81, 'EG':82, 'EW':83, 'EL':84,'FO':85,'FG':86, 'FH':87, 'FN':88, 'FP':89,'FQ':90,'FT':91, 'FD':92, 'FZ':93, 'GT':94,'GY':95,'GU':96, 'GI':97, 'GZ':98, 'GX':99,'GC':100,'GH':101,'GI':102,'GU':103,'GK':104
        };
            

  const encodeKey = Object.keys(enc_code); 

  function checkLen(message){
                if(message.length %3 === 1 )message+="  ";
                else if(message.length %3 === 2 )message+=" ";
                return message;
            }
            
  function encodeSeparate(message,messageLen){
             let result = []
                for(let i=0;i<messageLen;i+=3){
                    const subArr = [];
                    let subString = message.substr(i,3);
                    for (let char of subString)
                        subArr.push(alp_code[char]);
                    result.push(subArr);
                }
                return result;
            }
            
  function encodingMatrixMulti(matrxA){
                const matrxB = [[1,1,1],[2,1,0],[1,0,0]];
                let encodValue = "";
            
                for(let subMat of matrxA){
                  let num = 0;
                  let arr = [];
                  for(let i=0;i<3;i++){
                      for(let j=0;j<3;j++){
                          num += subMat[j] * matrxB[j][i];
                      }
                      encodValue += encodeKey[num];
                      num = 0;
                  }
              } 

         return encodValue;
               
        }
            

    export {checkLen,encodeSeparate,encodingMatrixMulti}
