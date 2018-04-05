package br.com.ltsuda.maven;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		
		Produto produto = new Produto("Bala", 0.15);
		
		System.out.println(produto.getNome() + produto.getPreco());
	}
}
