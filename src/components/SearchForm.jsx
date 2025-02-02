import toast from 'react-hot-toast';

export default function SearchForm({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.topic.value;
    if (value.trim() === '') {
      return toast.error('This is an error!');
    }
    onSearch(value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search here..." />
      <button type="submit">Search</button>
    </form>
  );
}
