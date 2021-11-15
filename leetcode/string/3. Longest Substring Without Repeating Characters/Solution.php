<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s)
    {
        function notEmpty($var)
        {
            return $var != 0;
        }
        $arrString = [];
        for ($i = 0; $i < strlen($s); $i++)
            if (array_key_exists($s[$i], $arrString))
                $arrString[$s[$i]] += 1;
            else
                $arrString[$s[$i]] = 0;
        $res = array_filter($arrString, "notEmpty");
        var_export($arrString);
        echo count($res);
        return count($res);
    }
}
$sol = new Solution;
$sol->lengthOfLongestSubstring("pwwkew");
