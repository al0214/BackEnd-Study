package org.example.calculator.calculate;

public class PositiveNumber {
    private final int value;

    public PositiveNumber(int value) {
        validate(value);
        this.value = value;
    }

    private void validate(int value) {
        if(isNagetiveNumber(value)){
            throw new IllegalArgumentException("0 또는 음수를 전달할 수 없습니다.");
        }
    }

    private boolean isNagetiveNumber(int value) {
        return value <= 0;
    }

    public int toInt() {
        return value;
    }
}
