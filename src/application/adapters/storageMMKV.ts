import { MMKV } from 'react-native-mmkv';

export class StorageMMKVAdapter {
  private static storage = new MMKV();

  static getItem(key: string): string | undefined {
    try {
      return this.storage.getString(key);
    } catch (error) {
      return undefined;
    }
  }

  static setItem(key: string, value: string): void {
    try {
      this.storage.set(key, value);
    } catch (error) {
      throw new Error('Error setting item in MMKV storage');
    }
  }

  static removeItem(key: string): void {
    try {
      this.storage.delete(key);
    } catch (error) {
      throw new Error('Error removing item from MMKV storage');
    }
  }

  static clear(): void {
    try {
      this.storage.clearAll();
    } catch (error) {
      throw new Error('Error clearing MMKV storage');
    }
  }

  // Métodos adicionales específicos de MMKV
  static getBoolean(key: string): boolean | undefined {
    try {
      return this.storage.getBoolean(key);
    } catch (error) {
      return undefined;
    }
  }

  static setBoolean(key: string, value: boolean): void {
    try {
      this.storage.set(key, value);
    } catch (error) {
      throw new Error('Error setting boolean in MMKV storage');
    }
  }

  static getNumber(key: string): number | undefined {
    try {
      return this.storage.getNumber(key);
    } catch (error) {
      return undefined;
    }
  }

  static setNumber(key: string, value: number): void {
    try {
      this.storage.set(key, value);
    } catch (error) {
      throw new Error('Error setting number in MMKV storage');
    }
  }

  static contains(key: string): boolean {
    try {
      return this.storage.contains(key);
    } catch (error) {
      return false;
    }
  }

  static getAllKeys(): string[] {
    try {
      return this.storage.getAllKeys();
    } catch (error) {
      return [];
    }
  }
}
