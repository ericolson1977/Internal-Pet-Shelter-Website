document.addEventListener('click', async (event) => {
  console.log('click', (event));
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/cat/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        if (document.referrer) {
          document.location.replace(document.referrer);
        } else {
          document.location.replace('/dashboard');
        }
      } else {
        alert('Failed to delete cat');
      }
    }
  });