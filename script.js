document.getElementById("transaksiForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const kategori = document.getElementById("kategori").value;

    if (!nama || !jumlah || !kategori) {
        alert("Harap isi semua kolom!");
        return;
    }

    const tbody = document.getElementById("transaksiList");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nama}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
    `;

    tbody.appendChild(row);

    this.reset();
});