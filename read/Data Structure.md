# Data Structure

> Strings & Arrays

1.  Character frequency count of a string

```sh
const freqCounter = (str)=>{
    let store = {}
    for(var i of str) store[i] = store[i] + 1 || 1 ;
    return store ;
}

freqCounter('siddhartha')
Result:
{a: 2, d: 2, h: 2, i: 1, r: 1, s: 1, t: 1}
```

2.  Check if the 2 strings have same set of characters | (Anagrams)
    ```sh
    Example:
    twoStringFrequencyCheck('siddhartha', 'siddhartha') -> true
    twoStringFrequencyCheck('siddhartha', 'sidd') -> false
    ```

```sh
const twoStringFrequencyCheck = (str1,str2)=>{
    if(str1.length !== str2.length) return false ;
    const store1 = {}
    const store2 = {}
    for(var i of str1) store1[i] = store1[i] + 1 || 1 ;
    for(var i of str2) store2[i] = store2[i] + 1 || 1 ;
    for(var i of str1){
        if(!(i in store2)) return false ;
        if(store1[i] !== store2[i]) return false ;
    }
    return true

}

twoStringFrequencyCheck('siddhartha','siddhartha')
Result:
true

twoStringFrequencyCheck('siddhartha','shhs')
Result:
false
```

3.  Check if the string is Subsequence of other String
    ```sh
    Example:
    isSubsequence('abc', 'abracadabra') -> true
    isSubsequence('abc', 'acb') -> false (order matters)
    ```

```sh
for maintaining the pattern from the start

const isSubsequence = (str1,str2)=>{
    let pointer = 0 ;
    let cursor = 0 ;
    while (cursor<str2.length) {
        if(str1[pointer]==str2[cursor]){
            pointer++ ;
            if(pointer == str1.length) return true ;
        }else pointer = 0 ;
        cursor++;
    }
    return false ;
}

for anywhere in the string

const isSubsequence1 = (str1,str2)=>{
    let pointer = 0 ;
    let cursor = 0 ;
    while (cursor<str2.length) {
        if(str1[pointer]==str2[cursor]){
            pointer++ ;
            if(pointer == str1.length) return true ;
        }
        cursor++;
    }
    return false ;
}
```

4.  Check for the Longest word in the string
    ```sh
    Example:
    longestWord('this is siddhartha Pharasi') -> 'Siddhartha'
    ```

```sh
const longestWord = (str)=>{
    let longest = '' ;
    let store = str.split(" ");
    for(i of store){
        if(i.length > longest.length) longest = i ;
    }
    return longest
}

const longestWord = (str)=> str.split(" ").sort((a,b)=>b.length-a.length)[0] ;

const longestWord = (str)=> str.split(" ").reduce((a,b)=>a.length-b.length >= 0 ? a:b) ;

```

4.  Check for the Longest word in the string
    ```sh
    Example:
    longestWord('this is siddhartha Pharasi') -> 'Siddhartha'
    ```

```sh
const longestWord = (str)=>{
    let longest = '' ;
    let store = str.split(" ");
    for(i of store){
        if(i.length > longest.length) longest = i ;
    }
    return longest
}

const longestWord = (str)=> str.split(" ").sort((a,b)=>b.length-a.length)[0] ;

const longestWord = (str)=> str.split(" ").reduce((a,b)=>a.length-b.length >= 0 ? a:b) ;

```
