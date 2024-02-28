class HashTable {
    table: Array<{ key: string, value: any }[]>;
    size: number;

    constructor(size: number = 10) {
        this.table = new Array(size).fill(null).map(() => []);
        this.size = size;
    }

    hash(key: string): number {
        return key.toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size;
    }

    add(key: string, value: any): void {
        const hash = this.hash(key);
        const entry = this.table[hash].find(item => item.key === key);
        if (entry) {
            entry.value = value;
        } else {
            this.table[hash].push({ key, value });
        }
    }

    get(key: string): any | undefined {
        const hash = this.hash(key);
        const entry = this.table[hash].find(item => item.key === key);
        return entry ? entry.value : undefined;
    }

    remove(key: string): void {
        const hash = this.hash(key);
        const index = this.table[hash].findIndex(item => item.key === key);
        if (index !== -1) {
            this.table[hash].splice(index, 1);
        }
    }

    display(): void {
        this.table.forEach((bucket, i) => {
            if (bucket.length > 0) {
                console.log(`Bucket ${i}:`, bucket);
            }
        });
    }
}

const ht = new HashTable();
ht.add('name', 'John Doe');
ht.add('age', 30);
ht.add('city', 'New York');
ht.display();

console.log(ht.get('name'));
ht.remove('age');
ht.display();
