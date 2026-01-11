use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sum_u32(data: Vec<u32>) -> u64 {
    data.iter().map(|&x| x as u64).sum()
}

#[wasm_bindgen]
pub fn heavy(n: u32) -> u32 {
    let mut x = 0u32;
    for i in 0..n {
        x = x.wrapping_add(i ^ (x << 1));
    }
    x
}