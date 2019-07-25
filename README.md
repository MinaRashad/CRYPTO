# CRYPTO
a Simple JavaScript Library To help crypting easly. 

It contains Cyphers like: reverse, Caeser, trasposition,
                          monoAlphabetic. atbash , affine
                          simpleShiftVigenere, autoKeyVigenere
                          
It Also contains some hashes like:
                          32bit Integer hash code, SHA1 hash
The Library Also contains: BruteForce That will work for Any hash or Cypher
                            Caeser Cracker More Crackers are coming soon
# How To Use ...


## Reverse:
  reverse(String): will return the string reversed
 
 Example:
              
              reverse('hello') => 'olleh'
 
 
## Caeser:
  caeser(String, Key, isEncrypt [Optional] ): isEncrypt default value is true if false it will decrypt instead
                                 
  Caeser encryption will take the string and shift every character by the key
  
**NOTE:** Caeser Will Return the Encryption All Capital letters
 
 Example: 
    
              caeser('Moon', 2) => 'OQQP'
              caeser('OQQP', 2, false) = 'MOON'
              
              
## Transposition:
   transposition(String, Key, isEncrypt [Optional] ): isEncrypt default value is true if false it will decrypt instead

   Based on a Special Algorithm , Transposition will change Places of All String Characters depending on the key
   
   **Highly recommended that When Transposition is used to use a key near to the half on the String**
   
   You can see more about it <a target='_blank' href='https://en.wikipedia.org/wiki/Transposition_cipher'>here</a>
   Examples:
   
              transposition('This is a Secret', 7) => 'T ehati sS eicsr'
              transposition('T ehati sS eicsr', 7, false) => 'This is a Secret'
              
## monoAlphabetic:
  monoAlphabetic(msg,keyPhrase,isEncrypt [optional] ) : isEncrypt default value is true if false it will decrypt instead
  
  MonoAlphabetic Takes a Secert phrase instead of a number Here are some Examples:
  
         monoAlphabetic('HelloWorld','secrt') => 'DTIILWLOIR'
         monoAlphabetic('DTIILWLOIR','secrt' , false) =>  'HelloWorld'
         
         
# Hashes:
## 32bit Integer:
   This is a hash which means It can not be decrypted by an Algorithm
  
  'YourText'.hashCode() will return a 32bit integer
   
   Example:
               
               'Hello'.hashCode() => 69609650
               'hello'.hashCode() => 99162322
               
## SHA1:
  Also a Very Famous hash **SHA1 Code is not mine**
  Read about it <a target='_blank' href='https://en.wikipedia.org/wiki/SHA-1'>here</a>
  Example:
              
              SHA1('Super Imporant Text') => '000a7b9aeba75024c4d02b1e61d098867857459a'
