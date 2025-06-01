export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// Existing PostData interface (if already present)
export interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// User data structure
export interface UserProps {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Add this interface for UserModalProps
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}
