const vegetables = document.querySelectorAll('.vegetable')

vegetables.forEach((vegetable) => {
   vegetable.addEventListener('click', () => {
       vegetable.classList.toggle('vegetable--active');
       let totalWeight = 0;

       document
           .querySelectorAll('.vegetable--active')
           .forEach((activeVegetable) => {
               totalWeight += Number(activeVegetable.children[1].textContent?.slice(0, -1));
           });
       const totalWeightEl = document.querySelectorAll('.total-weight');

       if (totalWeightEl !== null) {
           document.querySelector('.total-weight').textContent = `${totalWeight}g`;
       }
   });
});