// Anagram in JS

document.getElementById('proc').addEventListener('click', updater)

function updater(){
    let firstItem = document.getElementById('firstItem').value;
    let secondItem = document.getElementById('secondItem').value;
    // Set isAnagram to false, only change if it is
    let isAnagram = false;
    // Start processing the vars
    // If the lengths aren't the same they can't be anagrams
    // Return false
    if(firstItem.length !== secondItem.length){
        document.getElementById('result').innerText = isAnagram;
    }
    // If the lengths are the same, we need to process the strings
    else if (firstItem.length === secondItem.length){
        // Create new vars from user input strings
        // Change them to lower case, split each char, sort them, join them back, and trim
        let newFirst = firstItem.toLowerCase().split('').sort().join('').trim();
        let newSecond = secondItem.toLowerCase().split('').sort().join('').trim();
        // After processing the strings check they are the same, if so, report true
        if (newFirst === newSecond){
            isAnagram = true;
            document.getElementById('result').innerText = isAnagram;
        }
        // Otherwise, report back false
        else {
            isAnagram = false;
            document.getElementById('result').innerText = isAnagram;
        }
    }
}