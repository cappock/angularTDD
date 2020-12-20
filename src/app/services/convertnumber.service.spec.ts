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

  it("number one", () => {
    expect(service.getRomanNumber(1)).toEqual('I');
  });

  it("number 5", () => {
    expect(service.getRomanNumber(5)).toEqual('V');
  });

  it("number ten", () => {
    expect(service.getRomanNumber(10)).toEqual('X');
  });

  it("number fifty", () => {
    expect(service.getRomanNumber(50)).toEqual('L');
  });

  it("number hundred", () => {
    expect(service.getRomanNumber(100)).toEqual('C');
  });

  it("number five hundred", () => {
    expect(service.getRomanNumber(500)).toEqual('D');
  });

  it("number thousand", () => {
    expect(service.getRomanNumber(1000)).toEqual('M');
  });

  it("number four", () => {
    expect(service.getRomanNumber(4)).toEqual('IV');
  });

  it("number four hundred ninety nine", () => {
    expect(service.getRomanNumber(499)).toEqual('CDXCIX');
  });

});
