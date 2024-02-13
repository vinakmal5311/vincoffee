// created on : 20240205
// created by : Davin Akmal Dwi Putra
// logs: - 20240213 created

document.addEventListener('alpine:init', () => {
   Alpine.data('menu', () => ({
    items: [
        { id: 1, name: 'Americano', img: '1.jpg', price: 15000},
        { id: 2, name: 'Espresso', img: '2.jpg', price: 15000},
        { id: 3, name: 'Cafe Latte', img: '3.jpg', price: 18000},
        { id: 4, name: 'Cappucino', img: '4.jpg', price: 18000},
        { id: 5, name: 'Chocolate', img: '5.jpg', price: 18000},
        { id: 6, name: 'Matcha', img: '6.jpg', price: 18000},
    ],
    items1: [
        { id: 7, name: 'Croissant', img: '7.jpg', price: 12000},
        { id: 8, name: 'Waffle', img: '8.jpg', price: 10000},
        { id: 9, name: 'Dimsum', img: '9.jpg', price: 10000},
        { id: 10, name: 'Tachos', img: '10.jpg', price: 12000},
        { id: 11, name: 'Steak', img: '11.jpg', price: 20000},
        { id: 12, name: 'Aglio Lio', img: '12.jpg', price: 18000},
    ],
   }));

   Alpine.store('cart', {
    items: [],
    total: 0,
    qty: 0,
    add(newItem) {
        //  cek barang yg sama
        const cartItem = this.items.find(item => item.id === newItem.id);

        // Jika belum ada
        if(!cartItem) {
            this.items.push({...newItem, qty: 1, total: newItem.price});
            this.qty++;
            this.total += newItem.price;
        }else {
            // apakah barang beda atau sama
            this.items = this.items.map((item) => {
                // jika brang berbeda
                if(item.id !== newItem.id){
                    return item;
                } else {
                    // jika barang sudah ada tambah
                    item.qty++;
                    item.total = item.price * item.qty;
                    this.qty++;
                    this.total += item.price;
                    return item;
                }
            })
        }

    },
    remove(id) {
        // ambil id yg diremove
        const cartItem = this.items.find((item) => item.id === id);

        // jika lebih

        if(cartItem.qty > 1) {
            this.items = this.items.map((item) => {
                if(item.id !== id) {
                    return item;
                } else {
                    item.qty--;
                    item.total = item.price * item.qty;
                    this.qty--;
                    this.total -= item.price;
                    return item;
                }
            })
        } else if (cartItem.qty === 1) {
            this.items = this.items.filter((item) => item.id != id);
            this.qty--;
            this.total -= cartItem.price; 
        }
    }
   });
});

// price
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}






