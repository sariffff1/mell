const author = 'Aku';
            const swals = Swal.mixin({
                cancelButtonColor: '#909090',
                confirmButtonColor: '#3085d6',
            });
            async function mulai(){
                var { value: nama } = await swals.fire({
                    title: 'Masukin nama kamu',
                    input: 'text',
                    showCancelButton: false,
                });
                if(nama){
                    var { isConfirmed: Energi } = await swals.fire({
                        title: `${nama} Semangat ngga ${author} ?`,
                        confirmButtonText: 'Semangat dongg',
                        cancelButtonText: 'G',
                        showCancelButton: true,
                    });
                    if(semangat){
                        var { value: persen } = await swals.fire({
                            title: 'Berapa Persen?',
                            icon: 'question',
                            input: 'range',
                            inputLabel: 'Antara 90-100% ya',
                            inputAttributes: {
                                min: 90,
                                max: 100,
                            },
                            inputValue: 90
                        });
                        if(persen){
                            await swals.fire(`Makasih ya udah diisi ${author} ${persen}%`);
                            var { isConfirmed: semangat } = await swals.fire({
                                title: `Sekarang ${nama} mau seblak ngga ${author}?`,
                                confirmButtonText: 'Mauuu',
                                cancelButtonText: 'Gak!',
                                showCancelButton: true,
                            });
                            if(kangen){
                                await swals.fire(`Beli sendiri ${author} wkwkwk ${nama} :)`);
                                await swals.fire('Makasihhh!', 'Udah meluangkan waktunya!');
                                await swals.fire(`Sehat sehat yaa &#10084;&#65039;`);

                                var { isConfirmed: wht } = await swals.fire({
                                title: `${nama} mau chat ${author}?`,
                                confirmButtonText: 'Mau',
                                cancelButtonText: 'Engga!',
                                showCancelButton: true,
                            });
                            if(wht){
                            	await swals.fire(`Okeyyy`, `Nanti ${nama} kirim pesan ini ke WhatsApp ${author} ya &#10084;&#65039;`);
                            	//nomor WhatsApp
                                window.location = "https://api.whatsapp.com/send?phone=6285155122524&text=Hai..Masss,%0ASweet banget:(%0A%0AAku%20udah%20bacain%20semuanya><";
                            } else {
                                //gak ke wa
                                await swals.fire('Oke. See you &#10084;&#65039;');
                            }
                            } else {
                                //gak semangat
                                await swals.fire(':(');
                            }
                        }
                    } else {
                        //gak semangat
                        await swals.fire('Hmmmm:(');
                        await swals.fire('Yaudah deh');
                        await swals.fire('Semoga harimu indah &#10084;&#65039;');
                    }
                } else {
                    await swals.fire('Isi namanya donggg :)');
                    await swals.fire('Gak boleh kosong');
                }
                          }