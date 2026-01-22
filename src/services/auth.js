// Mock authentication service - replace with actual API calls
class AuthService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  // Store token in localStorage
  setToken(token) {
    localStorage.setItem('secguided_token', token);
  }

  // Get token from localStorage
  getToken() {
    return localStorage.getItem('secguided_token');
  }

  // Remove token from localStorage
  removeToken() {
    localStorage.removeItem('secguided_token');
  }

  // Store user data in localStorage
  setUser(user) {
    localStorage.setItem('secguided_user', JSON.stringify(user));
  }

  // Get user data from localStorage
  getUser() {
    const userStr = localStorage.getItem('secguided_user');
    return userStr ? JSON.parse(userStr) : null;
  }

  // Remove user data from localStorage
  removeUser() {
    localStorage.removeItem('secguided_user');
  }

  // Simulate API call - replace with actual fetch calls
  async login(email, password) {
    // Mock delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    // Mock user authentication - replace with actual API call
    const mockUser = {
      id: '1',
      email: email,
      username: email.split('@')[0],
      firstName: 'John',
      lastName: 'Doe',
      role: 'student',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    const mockToken = 'mock-jwt-token-' + Date.now();

    // In real implementation, this would be:
    // const response = await fetch(`${this.baseURL}/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // 
    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message || 'Login failed');
    // }
    // 
    // return await response.json();

    return {
      user: mockUser,
      token: mockToken,
      message: 'Login successful',
    };
  }

  async register(userData) {
    // Mock delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Validate required fields
    const required = ['email', 'password', 'firstName', 'lastName'];
    for (const field of required) {
      if (!userData[field]) {
        throw new Error(`${field} is required`);
      }
    }

    if (!this.isValidEmail(userData.email)) {
      throw new Error('Invalid email format');
    }

    if (userData.password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    // Check if email already exists (mock)
    if (userData.email === 'admin@secguided.com') {
      throw new Error('Email already registered');
    }

    // Mock user creation
    const mockUser = {
      id: Date.now().toString(),
      email: userData.email,
      username: userData.email.split('@')[0],
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role || 'student',
      createdAt: new Date().toISOString(),
      lastLogin: null,
    };

    const mockToken = 'mock-jwt-token-' + Date.now();

    // In real implementation:
    // const response = await fetch(`${this.baseURL}/auth/register`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // });
    // 
    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message || 'Registration failed');
    // }
    // 
    // return await response.json();

    return {
      user: mockUser,
      token: mockToken,
      message: 'Registration successful',
    };
  }

  async updateProfile(userData) {
    // Mock delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const currentUser = this.getUser();
    if (!currentUser) {
      throw new Error('Not authenticated');
    }

    // Merge updated data
    const updatedUser = {
      ...currentUser,
      ...userData,
      id: currentUser.id, // Ensure ID doesn't change
      createdAt: currentUser.createdAt, // Ensure creation date doesn't change
    };

    // In real implementation:
    // const response = await fetch(`${this.baseURL}/auth/profile`, {
    //   method: 'PUT',
    //   headers: {
    //     'Authorization': `Bearer ${this.getToken()}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // });
    // 
    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message || 'Profile update failed');
    // }
    // 
    // return await response.json();

    return {
      user: updatedUser,
      message: 'Profile updated successfully',
    };
  }

  async forgotPassword(email) {
    // Mock delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!email) {
      throw new Error('Email is required');
    }

    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    // In real implementation:
    // const response = await fetch(`${this.baseURL}/auth/forgot-password`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // });
    // 
    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message || 'Failed to send reset email');
    // }
    // 
    // return await response.json();

    return {
      message: 'Password reset email sent (mock)',
    };
  }

  async resetPassword(token, newPassword) {
    // Mock delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!token || !newPassword) {
      throw new Error('Token and new password are required');
    }

    if (newPassword.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    // In real implementation:
    // const response = await fetch(`${this.baseURL}/auth/reset-password`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ token, newPassword }),
    // });
    // 
    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message || 'Password reset failed');
    // }
    // 
    // return await response.json();

    return {
      message: 'Password reset successful (mock)',
    };
  }

  // Utility function to validate email
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Utility function to validate password strength
  validatePassword(password) {
    const minLength = 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const errors = [];
    if (password.length < minLength) {
      errors.push(`Password must be at least ${minLength} characters long`);
    }
    if (!hasUpper) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!hasLower) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!hasNumber) {
      errors.push('Password must contain at least one number');
    }
    if (!hasSpecial) {
      errors.push('Password must contain at least one special character');
    }

    return {
      isValid: errors.length === 0,
      errors,
      score: password.length >= minLength ? (hasUpper + hasLower + hasNumber + hasSpecial) : 0,
    };
  }

  // Check if token is expired (mock implementation)
  isTokenExpired() {
    const token = this.getToken();
    if (!token) return true;

    // In real implementation, decode JWT and check expiration
    // For mock, just check if token exists
    return false;
  }

  // Refresh token (mock implementation)
  async refreshToken() {
    const currentToken = this.getToken();
    if (!currentToken) {
      throw new Error('No token to refresh');
    }

    // Mock delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // In real implementation:
    // const response = await fetch(`${this.baseURL}/auth/refresh`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${currentToken}`,
    //   },
    // });
    // 
    // if (!response.ok) {
    //   this.removeToken();
    //   this.removeUser();
    //   throw new Error('Token refresh failed');
    // }
    // 
    // const data = await response.json();
    // this.setToken(data.token);
    // return data;

    const newToken = 'mock-refreshed-token-' + Date.now();
    this.setToken(newToken);

    return {
      token: newToken,
      message: 'Token refreshed successfully',
    };
  }
}

export const authService = new AuthService();