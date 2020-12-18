import { TestBed } from '@angular/core/testing';
import { ConvertnumberService } from './convertnumber.service';

describe('ConvertnumberService', () => {
  let service: ConvertnumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertnumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Number 1 -> I", () => {
    expect(service.getRomanNumber(1)).toEqual('I');
  });

  it("Number 5 -> V", () => {
    expect(service.getRomanNumber(5)).toEqual('V');
  });

  it("Number 10 -> X", () => {
    expect(service.getRomanNumber(10)).toEqual('X');
  });

  it("Number 50 -> L", () => {
    expect(service.getRomanNumber(50)).toEqual('L');
  });

  it("Number 100 -> C", () => {
    expect(service.getRomanNumber(100)).toEqual('C');
  });

  it("Number 500 -> D", () => {
    expect(service.getRomanNumber(500)).toEqual('D');
  });

  it("Number 1000 -> M", () => {
    expect(service.getRomanNumber(1000)).toEqual('M');
  });

  it("Number 4 -> IV", () => {
    expect(service.getRomanNumber(4)).toEqual('IV');
  });

  it("Number 499 -> CDXCIX", () => {
    expect(service.getRomanNumber(499)).toEqual('CDXCIX');
  });

  it("Number 27 -> XXVII", () => {
    expect(service.getRomanNumber(27)).toEqual('XXVII');
  });

  it("Number 54 -> LIV", () => {
    expect(service.getRomanNumber(54)).toEqual('LIV');
  });


});
