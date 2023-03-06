function lengthOfLongestSubstring(string) {
  let max = 0;
  let start = 0;
  let map = {};
  for (let end = 0; end < string.length; end++) {
    if (map[string[end]] !== undefined && map[string[end]] >= start) {
      start = map[string[end]] + 1;
    }

    map[string[end]] = end;
    max = Math.max(max, end - start + 1);
    // console.log(string[end], ":",map)
  }
  return max;
}

// console.log(lengthOfLongestSubstring("abceee"));

function LongestSubString(s) {
  if (!s) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let maxLen = 0;
  let charSet = new Set();

  while (j < s.length) {
    if (!charSet.has(s[j])) {
      charSet.add(s[j]);
      j++;
      maxLen = Math.max(maxLen, j - i);
    } else {
      charSet.delete(s[i]);
      i++;
    }
  }

  return maxLen;
}

function lengthOfLongestSubstring2(s) {
  let max = 0;
  let start = 0;
  let map = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    if (char in map && map[char] >= start) {
      start = map[char] + 1;
    } else {
      let length = end - start + 1;
      max = Math.max(max, length);
    }
    map[char] = end;
  }

  return max;
}

function lengthOfLongestSubstring(string) {
  let max = 0;
  let start = 0;
  let map = {};
  for (let end = 0; end < string.length; end++) {
    element = string[end];
    if (map[element] !== undefined && map[element] >= start) {
      start = map[element] + 1;
    }

    map[string[end]] = end;
    max = Math.max(max, end - start + 1);
    // console.log(string[end], ":",map)
  }
  return max;
}





function lengthOfLongestSubstringElement(string) {
    let max = 0;
    let start = 0;
    let map = {};
    for (let end = 0; end < string.length; end++) {

        element = string[end]
      if (map[element] !== undefined && map[element] >= start) {
        start = map[element] + 1;
      }
  //code below , will assign which letter we seeing at what index.ex: shows that map[string[end]] =end. meaning the following, map{a:index(0) b:1 }
 // and so on....
      map[element] = end;
      max = Math.max(max, end - start + 1);
      // console.log(string[end], ":",map)
    }
    return max;
  }

  console.log(lengthOfLongestSubstringElement("abcabcbb"))