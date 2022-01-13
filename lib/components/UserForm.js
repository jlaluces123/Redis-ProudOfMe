export default function UserForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    const form = new FormData(e.target);

    // transforming form data to object
    const formData = Object.fromEntries(form.entries());
    console.log('formData received: ', formData);

    const res = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = res.json();
    console.log('result: ', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='username' type='text' placeholder='username' />
      <input name='password' type='text' placeholder='password' />
      <button type='submit'>Sign Up</button>
    </form>
  );
}
