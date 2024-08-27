tecla = 'n'
alunos = []
while tecla != 's' do
	puts("Nomeie o aluno")
	nomeAluno = gets.chomp
	puts("Dê nota ao aluno")
	notaAluno = gets.chomp

	novoAluno = [nomeAluno, notaAluno]
	alunos += novoAluno

	tecla = gets.chomp
end

puts(alunos)