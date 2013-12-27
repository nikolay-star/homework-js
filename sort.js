//пузырьковая сортировка

var arr = [34, 234, -60, 0, 88, 0.1];

function BubbleSort(A)
{
    var n = A.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
            if (A[j+1] < A[j]) {
                var t = A[j+1];
                A[j+1] = A[j];
                A[j] = t;
            }
        }
    }
    return A;
}

alert(BubbleSort(arr).join("\n"))

