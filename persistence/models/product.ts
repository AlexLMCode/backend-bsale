import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'url_image' })
  url_image: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'discount' })
  discount: number;

  @Column({ name: 'category' })
  category: number;
}

export default Product;
