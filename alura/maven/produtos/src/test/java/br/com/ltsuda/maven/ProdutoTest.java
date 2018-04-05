package br.com.ltsuda.maven;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ProdutoTest {

	@Test
	public void verificaPrecoComImposto() {
		Produto bala = new Produto("bala1", 0.10);
		assertEquals(0.11, bala.getPrecoComImposto(), 0.00001);
	}
}
