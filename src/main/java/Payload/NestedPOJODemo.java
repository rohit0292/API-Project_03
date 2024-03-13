package Payload;

import java.util.List;

public class NestedPOJODemo {
	private String companyName;
    private String companyEmailId;
    private String companyNumber;
    private String companyAddress;
    private List<String> supportedSalaryBanks;
    List<Employee> employee;
    List<Contractors>contractors;
    CompanyPFDetails companyPFDetails;
    
    
	    public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyEmailId() {
		return companyEmailId;
	}
	public void setCompanyEmailId(String companyEmailId) {
		this.companyEmailId = companyEmailId;
	}
	public String getCompanyNumber() {
		return companyNumber;
	}
	public void setCompanyNumber(String companyNumber) {
		this.companyNumber = companyNumber;
	}
	public String getCompanyAddress() {
		return companyAddress;
	}
	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}
	public List<String> getSupportedSalaryBanks() {
		return supportedSalaryBanks;
	}
	public void setSupportedSalaryBanks(List<String> supportedSalaryBanks) {
		this.supportedSalaryBanks = supportedSalaryBanks;
	}
	public List<Employee> getEmployee() {
		return employee;
	}
	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}
	public List<Contractors> getContractors() {
		return contractors;
	}
	public void setContractors(List<Contractors> contractors) {
		this.contractors = contractors;
	}
	public CompanyPFDetails getCompanyPFDetails() {
		return companyPFDetails;
	}
	public void setCompanyPFDetails(CompanyPFDetails companyPFDetails) {
		this.companyPFDetails = companyPFDetails;
	}
		
	

}
