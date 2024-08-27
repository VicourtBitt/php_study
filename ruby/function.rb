alunos = [{nome: 'Pedro', disciplina: "Python", nota: 8}, {nome: 'Cathia', disciplina: 'C++', nota: 4}]

def aprovadorDeAluno (nome, disciplina, nota)
  foiAprovado = if nota < 6 ? 'Reprovado' : 'Aprovado'
  puts("#{nome} tirou #{nota} em #{disciplina} e foi #{foiAprovado}")
end

alunos.each do |aluno|
  aprovadorDeAluno(aluno[:nome], aluno[:disciplina], aluno[:nota])
end