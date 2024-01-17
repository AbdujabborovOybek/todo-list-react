/**
 * LocalStorage va SessionStorage bilan ishlash
 *
 * LocalStorage
 * 1. localStorage.setItem('key', 'value'); Ma'lumotni saqlash uchun
 * 2. localStorage.getItem('key'); Ma'lumotni olish uchun
 * 3. localStorage.removeItem('key'); Ma'lumotni o'chirish uchun
 * 4. localStorage.clear(); Barcha ma'lumotlarni o'chirish uchun
 *
 * SessionStorage
 * 1. sessionStorage.setItem('key', 'value'); Ma'lumotni saqlash uchun
 * 2. sessionStorage.getItem('key'); Ma'lumotni olish uchun
 * 3. sessionStorage.removeItem('key'); Ma'lumotni o'chirish uchun
 * 4. sessionStorage.clear(); Barcha ma'lumotlarni o'chirish uchun
 *
 * Agarda localStorage yoki sessionStorage ga object yoki array saqlansa
 * uni JSON.stringify() metodi orqali stringga o'zgartirib saqlash kerak
 *
 * json orqali saqlangan ma'lumotni olish uchun JSON.parse() metodi ishlatiladi
 *
 * const data = localStorage.setItem('key', JSON.stringify({ name: 'John' }));
 * const value = JSON.parse(localStorage.getItem('key')) || {} or [] or null
 *
 */
