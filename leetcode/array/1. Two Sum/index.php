<?php
function twoSum($nums, $target)
{
    for ($i = 0; $i < count($nums); $i++) {
        for ($j = $i + 1; $j < count($nums); $j++) {
            if (($nums[$i] + $nums[$j]) === $target) return [$nums[$i], $nums[$j]];
        }
    }
    return "Nothing";
}
$nums = [2, 3, 4];
var_export(twoSum($nums, 7));
