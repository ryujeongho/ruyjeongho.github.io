const renderMembers = () => {
    const members = JSON.parse(localStorage.getItem("members"));

    document.querySelector("table#tb-member tbody").innerHTML =
        members.reduce((html, {id, email, address, createdAt}) => {
            return `
                ${html}
                <tr>
                    <td>${id}</td>
                    <td>${email}</td>
                    <td>${address}</td>
                    <td>${convertToDateTime(createdAt)}</td>
                </tr>`;
        }, "");
};

const f = (n) => n < 10 ? '0' + n : n;
const convertToDateTime = (millis) => {
    const d = new Date(millis);
    const mm = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${mm}/${dd} ${hh}:${mi}`;
};

renderMembers();