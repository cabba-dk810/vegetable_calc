var vegetables = document.querySelectorAll('.vegetable');
vegetables.forEach(function (vegetable) {
    vegetable.addEventListener('click', function () {
        vegetable.classList.toggle('vegetable--active');
        var totalWeight = 0;
        document
            .querySelectorAll('.vegetable--active')
            .forEach(function (activeVegetable) {
            var _a;
            totalWeight += Number((_a = activeVegetable.children[1].textContent) === null || _a === void 0 ? void 0 : _a.slice(0, -1));
        });
        var totalWeightEl = document.querySelectorAll('.total-weight');
        if (totalWeightEl !== null) {
            document.querySelector('.total-weight').textContent = "".concat(totalWeight, "g");
        }
    });
});
