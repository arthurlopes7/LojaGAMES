import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({ relations: ['categoria'] });
  }

  findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOneBy({ id });
  }

  create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    await this.produtoRepository.update(id, produto);
    return this.produtoRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
