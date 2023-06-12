import { useState } from 'react';

export default function useInputState() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return { searchQuery, handleInputChange };
}
