import { enc_code } from "./encoding.js";

export const alp_code = {' ':0,'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26}


const decodeKeys = Object.keys(alp_code); 


function decodeSeparate(decodeValue){
    let decodeMatrix = []
    let decode = [];       
    for(let i=0;i<decodeValue.length;i+=2){
        let subString = decodeValue.substr(i,2);
        decode.push(enc_code[subString]);
        if(decode.length === 3){
            decodeMatrix.push(decode);
            decode = [];
        }
    }
    return decodeMatrix;
    
}


function decodeMatrixMulti(matrxA){
    const matrxB = [[0,0,1],[0,1,-2],[1,-1,1]]
    let decodeValue = "";          
      for(let subMat of matrxA){
          let num = 0;
          let arr = [];
          for(let i=0;i<3;i++){
              for(let j=0;j<3;j++){
                  num += subMat[j] * matrxB[j][i];
              }
              decodeValue += decodeKeys[num];
              num = 0;
          }
      }

      return decodeValue;
      
}

   export {decodeMatrixMulti,decodeSeparate};